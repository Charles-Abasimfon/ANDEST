
const SingleTestimonial = (props) => {
	const { itemClass, itemImg, Title, Designation, Desc } = props;
    return (
        <div className={itemClass ? itemClass : 'ras-single-testimonial'}>
            <p>{Desc ? Desc : 'Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy.'}</p>
            <div className="testi-info">
                <h4 className="ras-testi-name">{Title ? Title : 'Backey Tompson'}</h4>
                <p className="ras-testi-designation">{Designation ? Designation : 'Ceo of Atardam'}</p>
            </div>
            <div className="ras-rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-ui-rate-blank"></i>
            </div>
            <img 
                className="ras-testi-photo" 
                src= {itemImg} 
                alt="Backey Tompson"
            />
        </div>
    )
}

export default SingleTestimonial