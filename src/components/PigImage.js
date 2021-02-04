function PigImage({hog, image}){
    function onImageClick(imageTag){
        let imageDiv = imageTag.closest('div');
        imageDiv.innerHTML = `
        <div class="card">
            <div class="image">
                <img src=${image}>
            </div>
            <div class="content">
                <div class="header">Name: ${hog.name}</div>
                    <div class="meta">
                        Specialty: <a>${hog.specialty}</a>
                    </div>
                    <div class="description">
                        Highest Medal: ${hog['highest medal achieved']}
                    </div>
                </div>
                <div class="extra content">
                <span class="right floated">
                    Weight: ${hog.weight} pounds
                </span>
                <br>
                <span>
                    ${hog.greased ? "Greased" : "Not Greased"}
                </span>
            </div>
        </div>
        `;
    }
    return (
        <div className="ui eight wide column" >
            <h2>{hog.name}</h2>
            <img src={image} alt={hog.name} onClick={(e)=>onImageClick(e.target)}></img>
        </div>
    );
}

export default PigImage;