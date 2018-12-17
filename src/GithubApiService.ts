import * as request from "request";
import {User} from "./User";
import {Repo} from "./Repo";

const OPTIONS: any = {
    headers: {
        "User-Agent": "request"
    },
    json: true

};

export class GithubApiService {
    getUserInfo(userName: string, callBackFunction: (user: User) => any) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body)
            callBackFunction(user);
        });
    }

    getRepos(userName: string, callBackFunction: (repoList: Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (error: any, response: any, body: any) => {
            var repoList = body.map((repo: any) => new Repo(repo));
            callBackFunction(repoList);

        });

    }
}