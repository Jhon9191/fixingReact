export const PostCard = (props) => ( 
    <div className="post">
        <img src={props.cover} alt={props.title} />
        <div className="post-card">
            <h1> {props.title}</h1>
            <p> {props.body}</p>
        </div>
    </div>
);