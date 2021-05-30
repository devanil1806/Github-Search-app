import React from 'react';

import { IRepository } from '../Models/IRepository';

interface Iprops{
   repos:IRepository[]
}
interface Istate {

}
class GithubRepos extends React.Component<Iprops,Istate>{
    constructor(props:Iprops) {
        super(props);
    }
    render(){
        let {repos} = this.props;
        return (
            <>
            <div className="card">
                <div className="card-header purple-gradient">
                    <p className="h4 text-center"> Your Repository

                    </p>
                </div>
                <div className="card-body">
                    <ul className="list-group ">
                        {
                            repos.map(repo =>{
                                return (
                                    <li className="list-group-item" key={repo.git_url}>
                                        <div className="d-flex justify-content-between">
                                            <span className="h5">
                                                <a href={repo.html_url} className='mx-4' target="_blank">{repo.name}</a>
                                                <span className="badge badge-success mx-2">{repo.stargazers_count} Stars</span>
                                                <span className="badge badge-warning mx-2">{repo.watchers_count} Watchers</span>

                                            </span>

                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>



            </>
        )
        
    }
}
export default GithubRepos