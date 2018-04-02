import React, {fx} from "../../fx";


class Tag extends  React.Component {

    render() {
        return(
            <fx.UI.BS.Button className="btn btn-outline-info m-2 small">{this.props.tag}</fx.UI.BS.Button>
        )
    }
}




class TagCloud extends React.Component {

    

    renderTag(tag) {

    }

    render(){

        console.log("TAG CLOUD", {tags: this.props.tags})

        return(
            <div className = "d-flex flex-wrap bg-light" >
                {
                    fx._.flatMap(
                        this.props.tags,
                        (tag) => <Tag key={tag} tag={tag} />
                    )
                }
            </div>

        )

    }

}




export default TagCloud;

