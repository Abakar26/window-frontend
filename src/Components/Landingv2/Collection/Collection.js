/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import CollectionShimmer from './CollectionShimmer';
import ProductModal from './Modals/ProductModal';
import { API_URL } from '../../../Constants/Constants';

const INNER_PAGE_SIZE = 20;
const OUTER_PAGE_SIZE = 200;

class CollectionV2 extends React.Component {
  /*
  For data diversity and quality purposes, we are using double pagination in this component. The implementation is
  quite straight forward, our outer pages are relatively big and using our API as the data source. While our
  inner pages are using outer pages as the data source without replicating the data.
  */
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showModal: false,
      showSizeSuggestion: false,
      suggestionsStyle: 'size_select_box',
      showDescription: false,
      productCollections: [],
      products: [],
      modalProduct: null,
      totalProductsCount: null,
      nextPage: 1,
      nextInnerPage: 1,
      selectImg: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.openProductModal = this.openProductModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSizeSuggestion = this.handleSizeSuggestion.bind(this);
    this.setShowDescription = this.setShowDescription.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.fetchProductCollections = this.fetchProductCollections.bind(this);
    this.anyFiltersApplied = this.anyFiltersApplied.bind(this);
    this.setSelectImg = this.setSelectImg.bind(this);
  }

  componentDidMount() {
    const { isMainPageSearch } = this.props;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (!isMainPageSearch) {
      this.fetchProducts();
    }
    this.fetchProductCollections();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { filters } = this.props;
    if (JSON.stringify(filters) !== JSON.stringify(nextProps.filters)) {
      this.setState({
        nextPage: 1,
        products: [],
      }, () => {
        this.fetchProducts();
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const computedScroll = window.innerHeight + e.target.documentElement.scrollTop + 1;
    const { loading, nextInnerPage, products } = this.state;
    if (!loading && computedScroll >= e.target.documentElement.scrollHeight) {
      // Deciding between extending inner pagination using already fetched products or making an API call
      if (nextInnerPage * INNER_PAGE_SIZE < products.length - INNER_PAGE_SIZE) {
        this.setState({ nextInnerPage: nextInnerPage + 1 });
      } else {
        this.fetchProducts();
      }
    }
  };

  setSelectImg = (value) => {
    this.setState({
      selectImg: value,
    });
  };

  openProductModal = (product) => {
    const { productCollections } = this.state;
    this.setState({ modalProduct: product, showModal: true });
    if (window.innerWidth > 768) {
      this.setState({ modalProduct: product, showModal: true });
    } else {
      this.setState({ showModal: false });
      this.props.navigate(`/products/${product.id}`, {
        state: { myproduct: product, myproductCollections: productCollections },
      });
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      showSizeSuggestion: false,
      showDescription: false,
      suggestionsStyle: 'size_select_box',
      selectImg: 0,
    });
  };

  handleSizeSuggestion = () => {
    this.setState({ showSizeSuggestion: true, suggestionsStyle: 'on_size_suggestion' });
  };

  setShowDescription = (value) => {
    this.setState({ showDescription: value });
  };

  anyFiltersApplied = () => {
    const { filters } = this.props;
    return Object.values(filters).some((filter) => filter?.length !== 0);
  };

  fetchProducts = () => {
    const { filters } = this.props;

    const { nextPage, products } = this.state;
    if (nextPage === null) {
      return;
    }

    const apiUrl = `${API_URL}api/v1/products/?page=${nextPage}&per_page=${OUTER_PAGE_SIZE}`;
    let params = {};
    this.setState({ loading: true });

    if (this.anyFiltersApplied()) {
      params = {
        search: filters.searchText,
        websites: filters.websites,
        min: filters.minPrice,
        max: filters.maxPrice,
        colors: filters.colors,
        length: filters.lengths,
        fabrics: filters.fabrics,
        categories: filters.categories,
        sizes: filters.sizes,
        occasions: filters.occasions,
        fit: filters.fits,
      };
    }

    axios.get(apiUrl, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params,
    }).then((response) => {
      // Reset the inner pagination on outer pagination reset
      if (nextPage === 1) {
        this.setState({ nextInnerPage: 1 });
      }
      this.setState({
        products: [...products, ...response.data.products],
        totalProductsCount: response.data.meta.products_count,
        nextPage: response.data.meta.next_page,
      });
    }).catch(() => {
      if (nextPage === 1) {
        this.setState({ products: [], totalProductsCount: 0 });
      }
      this.setState({ nextPage: null });
    }).finally(() => {
      this.setState({ loading: false });
    });
  };

  updateProduct = (product) => {
    const { products } = this.state;
    const updatedProducts = products.map((obj) => {
      if (obj.id === product.id) {
        return { ...product };
      }
      return obj;
    });
    this.setState({
      modalProduct: product,
      products: updatedProducts,
    });
  };

  fetchProductCollections = () => {
    axios.get(`${API_URL}api/v1/collections`, {
      headers: {
        Authorization: localStorage.getItem('authorization'),
      },
      params: {
        record_type: 'product',
      },
    }).then((response) => {
      if (response.data && Array.isArray(response.data.collections) && response.data.collections.length > 0) {
        this.setState({ productCollections: response.data.collections });
      }
    });
  };

  render() {
    const {
      loading, modalProduct, nextInnerPage, products, totalProductsCount, productCollections,
      showDescription, showModal, showSizeSuggestion, suggestionsStyle, selectImg,
    } = this.state;
    // Array.prototype.slice() create a shallow copy of the elements
    const innerPageProducts = products.slice(0, nextInnerPage * INNER_PAGE_SIZE);

    if (loading) {
      return (
        <div>
          <CollectionShimmer products={products} />
        </div>
      );
    }
    return (
      <div className="bg-white w-full px-[98px] z-10 md:px-4">
        <div className="mx-auto">
          <div className="flex w-full justify-start sm:justify-center mt-3">
            {totalProductsCount !== null && totalProductsCount !== 0
              ? (
                <p className="bookmarks_show_text mb-[17px] flex mt-[24px]">
                  {`Showing ${totalProductsCount} results`}
                </p>
              )
              : (
                <div className="flex flex-col mt-[24px]">
                  <p className="no_exact_msg md:mb-1">No exact matches found</p>
                  <p className="try_changing_msg text-[#808080]">Try changing your search query or removing filters</p>
                </div>
              )}
          </div>
          <div>
            {modalProduct && (
              <ProductModal
                product={modalProduct}
                updateProduct={this.updateProduct}
                productCollections={productCollections}
                showModal={showModal}
                closeModal={this.closeModal}
                showSizeSuggestion={showSizeSuggestion}
                handleSizeSuggestion={this.handleSizeSuggestion}
                suggestionsStyle={suggestionsStyle}
                showDescription={showDescription}
                setShowDescription={this.setShowDescription}
                setSelectImg={this.setSelectImg}
                selectImg={selectImg}
              />
            )}
          </div>
          {!loading
            && (
              <div className="grid auto-cols-auto gap-y-[64px] gap-x-[36px] grid_auto_fill mb-20">
                {
                  innerPageProducts.map((product, index) => (
                    <ProductCard
                      index={index}
                      product={product}
                      updateProduct={this.updateProduct}
                      key={`product-${product.id}`}
                      productCollections={productCollections}
                      openModal={() => { this.openProductModal(product); }}
                    />
                  ))
                }
              </div>
            )}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

CollectionV2.propTypes = {
  filters: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    websites: PropTypes.arrayOf(PropTypes.string).isRequired,
    minPrice: PropTypes.arrayOf(PropTypes.string).isRequired,
    maxPrice: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    lengths: PropTypes.arrayOf(PropTypes.string).isRequired,
    fabrics: PropTypes.arrayOf(PropTypes.string).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    occasions: PropTypes.arrayOf(PropTypes.string).isRequired,
    fits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isMainPageSearch: PropTypes.oneOfType(PropTypes.undefined, PropTypes.bool).isRequired,
};

export default CollectionV2;
