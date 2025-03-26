import { useEffect, useState } from "react";
import { PostLayout, UrlLayout} from "./styled";
//import metadata from 'url-metadata';

function Post(props){
    const { image, username, description, url } = props;
    const [metadata, setMetadata] = useState(null);

    /*useEffect(() => {
        const fetchMetadata = async () => {
            const data = await metadata(url);
            setMetadata(data);
        };

        fetchMetadata();
    }, [url]) */

    const handleLinkClick = () => {
        window.open(url);
    };

    return(
        <PostLayout>
            <div>
                <img src={image}/>
            </div>

            <div>
                <h3 data-test="username">{username}</h3>
                <p data-test="description">{description}</p>

                <UrlLayout data-test="link" onClick={handleLinkClick}>
                    <div>
                        <p>{""/*metadata.title*/}</p>
                        
                        <p>{""/*metadata.description*/}</p>

                        <p>{url}</p>
                    </div>

                    <img src={""/*metadata.image*/}/>
                </UrlLayout>
            </div>
        </PostLayout>
    )
}

export default Post;