import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RepositoryItem from '../../components/RepositoryItem/RepositoryItem'
import { IGithubRep } from '../../types/types'
import "./repositorylist.css"

interface RepositoryListProps {
    
}

const RepositoryList:React.FC<RepositoryListProps> = ({}) => {

    const [searchText, setSearchText] = useState('')
    const [repository, setRepository] = useState<IGithubRep[]>([])
    // const tokenGithub = 'bearer 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'

    // bearer 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

    // const config = {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `bearer ${tokenGithub}`,
    //     }
    // }
    const urlGithub = `https://api.github.com/search/repositories?q=${searchText}&per_page=30`

    async function getRepos() { 
        if(searchText !== ''){
        const response = await axios.get(urlGithub)
        setRepository(response.data.items)
        }else setRepository([])
    }
    
    useEffect(() => {
        const rep = localStorage.getItem('repository')
        if(rep){
            setRepository(JSON.parse(rep))
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('repository', JSON.stringify(repository))
    }, [repository])


    
    return (
        <div className='github__container'>
            <Link to={'/'}><span className="less-than-white">&lt;</span></Link>
            <div className="github__header">
                <input type="text" placeholder='Введите название репозитория' className="github__header-input" value={searchText} onChange = {e => setSearchText(e.target.value)} required />
                <button className='github__header-btn' onClick={getRepos}>Поиск</button>
            </div>
            <div className="github__body">
                {repository.map(repos => (
                    <RepositoryItem repository = {repos} key = {repos.id}/>
                ))}
            </div>
        </div>
    )
}
export default RepositoryList;