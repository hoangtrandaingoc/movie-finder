import React from 'react';
import PropTypes from 'prop-types';
import '../Pagination/Pagination.scss';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {page, totalPages} = pagination;

    function handlePageChange(newPage){
      if(onPageChange){
        onPageChange(newPage);
      }
    }
    
    return (
        <div className="pagination">
            <button
                className="btn-prev"
                disabled={page === 1}
                onClick={()=>handlePageChange(page-1)}
            >
                &lt; Prev
            </button>

            <button
                className="btn-next"
                disabled={page >= totalPages}
                onClick={()=>handlePageChange(page+1)}
            >
                Next &gt;
            </button>
        </div>
    );
}

export default Pagination;