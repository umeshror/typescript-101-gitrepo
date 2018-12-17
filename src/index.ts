import {GithubApiService} from "./GithubApiService";
import {User} from "./User";
import {Repo} from "./Repo";
import * as _ from "lodash";

let githubService = new GithubApiService();
githubService.getUserInfo("umeshror", (user: User) => {
    githubService.getRepos("umeshror", (repoList: Repo[]) => {
        let sortedRepors = _.sortBy(repoList, [(repo: Repo) => repo.forkCount * -1]);
        let filteredRepos = _.take(sortedRepors, 5)
        user.repos = filteredRepos;
        console.log(user)

    });
});
