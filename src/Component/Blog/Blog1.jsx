import PropTypes from 'prop-types';

const Blog1 = (blog) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

Blog1.prototype = {
    blog: PropTypes.object.isRequired
}

export default Blog1;