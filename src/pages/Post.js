import React from 'react';

const Post= ({match})=> {
    return(
        <div>
             <h2>Post id: {match.params.id}</h2>{/*useParams ile "id" yalama işlemi yaptık "name" yakalayacak olsaydık id yerine name yazacaktık */}
        </div>
    )
}


export default Post;
