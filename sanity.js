import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";



// connection to the backend: 
// docs: https://www.sanity.io/docs/js-client 

const client = createClient({
    projectId: "u4zou2eq",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-03-05',
})

// image builder: 
// docs: https://www.sanity.io/docs/image-url 

const builder = ImageUrlBuilder(client);
function urlFor(source) {
    return builder.image(source)
  }

// RUN THIS in the sanity folder to add exception for localhost 3000 CORS policy
// cd project-dir/sanity
// sanity cors add http://localhost:3000

export default client;