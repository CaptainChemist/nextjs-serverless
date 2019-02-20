A Serverless boilerplate project created with a Next.js frontend and a Apollo Server backend.

This is a boilerplate repo for a full stack GraphQL React application that has server side rendering for good SEO and apollo graphQL for rapid development and seamless API schema upkeep. It sits on 1 lambda fuction behind an API gateway so that it is totally serverless and utilizing a single lambda function instead of one for the frontend and one for the backend ensures that the cold starts will only be experienced once. 

This is definitely still in a preliminary state, but you can deploy using `yarn build` followed by `UP_STAGE=staging up` after you have run `yarn install` and install Apex Up globally on your command line. Local development can be run with `yarn dev`.

Some Issues:
- Routing is a little weird on api gateway because the next.js Link component isn't adding the UP_STAGE path when changing routes. So a sample route should be https://8whfet9vwj.execute-api.us-east-1.amazonaws.com/staging/admin but the nextjs app tries to direct it to https://8whfet9vwj.execute-api.us-east-1.amazonaws.com/admin and the API gateway returns a forbidden warning. 
- Yarn workspaces is great for creating modules, but lambda gets confused when it sees those @yournamespace/common packages in the package.json. Also, you have to do an `npm install` in the `web` directory before you deploy with apex up because yarn workspaces adds the node_modules to the root directory, while apex up needs those dependencies in the `node_modules` folder within the web project. 
- Lambda has a size limit of 250 MB unzipped. Even just a simple boilerplate like this basically runs up to that limit. We really need to move the whole lambda project to an s3 bucket or use some sort of tree-shaking webpack method to get the package size down. 

With that said, this is still a cool proof-of-concept to basically have all the benefits of next.js, graphQL and serverless combined together with very few drawbacks. 
