import { ContainerPagination } from './styled';

const MAX_ITENS = 3;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

function Pagination ({ 
    limit, 
    total, 
    offset, 
    setOffSet 
}) {

    const currentPage = offset ? (offset / limit) + 1 : 1;
    const numberPages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);


    function onPageChange(page){
        setOffSet((page - 1) * limit)
    }
    function onPageInit (){
        setOffSet(0)
        limit = 8;
    }


    function onPageEnd (){
        setOffSet(total - limit)
        limit = 8;
    }
    return(
        <ContainerPagination>
            <ul>
                <button
                    onClick={()=>onPageInit()}
                    disabled={currentPage === 1}
                >
                    Inicio
                </button>
                <button
                    onClick={()=> onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
               {Array.from({ length: Math.min(MAX_ITENS, numberPages)})
                .map((_, index)=> index + firstPage)
                .map((page) =>(
                    <li key={page} >
                        <button
                            onClick={()=> onPageChange(page)}
                            className={ 
                                page === currentPage 
                                ? 'pagination_item--active' 
                                : null
                            }
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <button
                    onClick={()=> onPageChange(currentPage + 1)}
                    disabled={currentPage === numberPages}
                >
                    Proxima
                </button>

                <button
                    onClick={()=>onPageEnd()}
                    disabled={currentPage === numberPages}
                >
                    Final
                </button>
            </ul>
        </ContainerPagination>
    )
}


export default Pagination;