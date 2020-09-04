import { USERS_DATA, USERS_DETAILS_DATA } from "../constants/action_types";

const initialState = {
    userData: [],
    userDetailsData: {
        "login": "bmizerany",
        "id": 46,
        "node_id": "MDQ6VXNlcjQ2",
        "avatar_url": "https://avatars2.githubusercontent.com/u/46?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bmizerany",
        "html_url": "https://github.com/bmizerany",
        "followers_url": "https://api.github.com/users/bmizerany/followers",
        "following_url": "https://api.github.com/users/bmizerany/following{/other_user}",
        "gists_url": "https://api.github.com/users/bmizerany/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bmizerany/subscriptions",
        "organizations_url": "https://api.github.com/users/bmizerany/orgs",
        "repos_url": "https://api.github.com/users/bmizerany/repos",
        "events_url": "https://api.github.com/users/bmizerany/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bmizerany/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Blake Mizerany",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "public_repos": 156,
        "public_gists": 165,
        "followers": 1233,
        "following": 19,
        "created_at": "2008-01-24T04:44:30Z",
        "updated_at": "2019-07-30T18:43:18Z"
      },
};

export default (state = initialState, action) => {

    switch (action.type) {

        case USERS_DATA:
            return {
                ...state,
                userData: action.payload
            };

        case USERS_DETAILS_DATA:
            return {
                ...state,
                userDetailsData: action.payload
            };

        default:
            return state;
    }
};
