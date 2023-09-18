import PropTypes from 'prop-types'
import './blog.css'

const Blog = ({blog}) => {
    const {name,img, credit, price, details} = blog;
    function handleClick(){
        alert  ('button clicked')
    }
    return (
        <div className='flex flex-col card gap-3'>
            <div className=''>
            <img src={img} alt="" />
            </div>
            <h2 className='text-4xl'>{name}</h2>
            <p>{details}</p>

            <div className='md:flex'>
                <div className='md:flex '>
                    <img src="../../public/icon/d.png" alt="" />
                    <h4>Price : {price} </h4>
                </div>
                <div className='md:flex '>
                    <img src="../../public/icon/b.png" alt="" />
                    <h4>Credit:{credit}</h4>

                </div>
                
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Select</button>
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;