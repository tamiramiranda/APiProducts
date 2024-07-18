import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export interface Product {
    url: string,
    ProductImage: string,
    name: string;
    price: number;
    promotional_price: number,
    payment_option: string;
}

export interface ApiResponse {
    Product: Product;
}

export const useSearchProducts = defineStore('SearchProduct', () => {

    const urlValida = ref('');
    const products = ref<ApiResponse[]>([]);
    const loading = ref(false);
    const error = ref('');

    const setUrl = async(urlValida) => {
        try {
            loading.value = true;
            error.value = '';
            const response = await axios.get<ApiResponse[]>(urlValida.origin + '/web_api/products');
            setTimeout(() => {
                loading.value = false;
                products.value = response.data.Products;
            }, 1000)
        }
        catch (err) {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
                error.value = 'Falha ao consultar os produtos!';
            }, 1000)
        }
    }

    return {
        urlValida,
        products,
        loading,
        error,
        setUrl
    }
})