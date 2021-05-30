import React from 'react';
import { IRepository } from './Models/IRepository';
import {IProfile} from './Models/Iprofile';
import { GithubCred } from './Credentials/GithubCred';
import axios,{AxiosResponse} from 'axios';
import GithubProfile from './Profile/GithubProfile';
import GithubRepos from './Repository/GithubRepos';






interface Iprops{

}
interface Istate {
    githubUsername: string;
    repos:IRepository[];
    profile:IProfile;
}
class GithubProfileSearchApp extends React.Component<Iprops,Istate>{
    constructor(props: Iprops){
        super(props);
        this.state = {
            githubUsername:'',
            profile:{} as IProfile,
            repos:[] as IRepository[]

        }
    }
      
    // Input....
    changeInput=(e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
           ...this.state,
           githubUsername: e.target.value

        })

    }

    // Form Submit
    submitSearch=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // Search for Profile
        this.SearchProfile(this.state.githubUsername)

        // Search for Profile Repository
        this.SearchRepos(this.state.githubUsername)
    }

    //1. Search for Profile
    SearchProfile=(gitUser:string)=>{
        let dataUrl:string =`https://api.github.com/users/${gitUser}?
        Client_id=${GithubCred.Client_id}&Client_secret=${GithubCred.Client_secret}`;
        axios.get(dataUrl).then((response:AxiosResponse<any>) => {
            this.setState({
                ...this.state,
                profile: response.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    // 2.search for Repository
    SearchRepos=(gitUser:string)=>{
        let dataUrl:string =`https://api.github.com/users/${gitUser}/repos?
        Client_id=${GithubCred.Client_id}&Client_secret=${GithubCred.Client_secret}`;
        axios.get(dataUrl).then((response:AxiosResponse<any>) => {
            this.setState({
                ...this.state,
                repos: response.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }




    render() {
        return (
            <>
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col">
                        <h3 className='text-primary text-center display-5'><b>Github Search App</b></h3>
                        <p className='text-center display-6'>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</p>
                        {/* <pre>{JSON.stringify(this.state.githubUsername)}</pre> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <form onSubmit={this.submitSearch} >
                            
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group mt-2">
                                        <input type="text" placeholder="User Name" className="form-control" onChange={this.changeInput} value={this.state.githubUsername} />

                                    </div>

                                </div>
                                <div className="col-md-9">
                                    <input type="submit" value="Submit" className="btn near-moon-gradient btn-md"/>
                                </div>
                            </div>
                            


                        </form>
                    </div>
                </div>

            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                       {
                           Object.keys(this.state.profile).length > 0 &&
                           <GithubProfile profile={this.state.profile}/>
                       }
                    </div>
                </div>

            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {

                         Object.keys(this.state.repos).length > 0 &&
                        <GithubRepos repos={this.state.repos}/>
                        
                        }
                    </div>
                </div>

            </div>


            


            </>
        )
    }
}
export default GithubProfileSearchApp;








