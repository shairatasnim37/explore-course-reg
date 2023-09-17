import PropTypes from 'prop-types'
import './blog.css'

const Blog = ({blog}) => {
    const {name,img, credit, price, details} = blog;
    return (
        <div className='flex flex-col lg:flex-row card'>
            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img src={img} alt="" />
            </div>
            <h2 className='text-4xl'>{name}</h2>
            <p>{details}</p>

            <div className='md:flex gap-2'>
                <div className='md:flex '>
                    <img src="../../public/icon/d.png" alt="" />
                    <h4>Price : {price} </h4>
                </div>
                <div className='md:flex '>
                    <img src="../../public/icon/b.png" alt="" />
                    <h4>Credit:{credit}</h4>

                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;