const SingleTestimonialTwo = (props) => {
    const { itemClass, itemImg, Title, Designation, Desc } = props;

    return (
        <div className={itemClass ? itemClass : 'ras-single-testimonial'}>
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="ras-testi-photo fadeInLeft">
                        <img 
                            src={itemImg} 
                            alt="Alaina Gillespy" 
                        />
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 align-items-center">
                    <div className="ras-testi-info fadeInRight">
                        <h4 className="ras-testi-name">{Title ? Title : 'Backey Tompson'}</h4>
                        <p className="ras-testi-designation">{Designation ? Designation : 'Ceo of Atardam'}</p>
                        <p>{Desc ? Desc : 'Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy.Maboriosam in a nesciung eget magna dapibus disting tloctio in the find it per odiy.Maboriosam in a tloctio in the find it per odiy.'}</p>
                        <div className="ras-rating">
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialTwo