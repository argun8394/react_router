import React from 'react';
import {useParams} from "react-router-dom";

const Post= ({/*{match}*/})=> {
    const {id} = useParams();

    return(
        <div>
            <h2>Post id : {id}</h2>
             {/*<h2>Post id: {match.params.id}</h2>      useParams hooku ile "id" yalama işlemi yaptık yani post sonrası ne yazarsak ona erişiriz --- "name" yakalayacak olsaydık id yerine name yazacaktık */}
        </div>
    )
}


export default Post;
