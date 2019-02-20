PocketScholar-Next

This is a boilerplate repo for a full stack GraphQL React application that has server side rendering for good SEO and apollo graphQL for rapid development and seamless API schema upkeep. It sits on 1 lambda fuction behind an API gateway so that it is totally serverless and utilizing a single lambda function instead of one for the frontend and one for the backend ensures that the cold starts will only be experienced once. 

This is definitely still in a preliminary state, but you can deploy using `yarn build` followed by `UP_STAGE=staging up` after you have run `yarn install` and install Apex Up globally on your command line. Local development can be run with `yarn dev`.
