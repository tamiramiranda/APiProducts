<script setup lang="ts">
    import { useSearchProducts } from '../stores/searchProducts';

    const storeSearch = useSearchProducts();
</script>

<template>
    <div>
        <h2>Produtos</h2>

        <div v-if="storeSearch.loading">
            <span class="loading">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#002C6A" stroke="#002C6A" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#002C6A" stroke="#002C6A" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#002C6A" stroke="#002C6A" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
            </span>
        </div>

        <div v-if="storeSearch.error">
            <span class="error">{{ storeSearch.error }}</span>
        </div>

        <div v-if="!storeSearch.loading && !storeSearch.error">

            <div v-if="storeSearch.products.length == 0">
                <span class="alert">Insira a URL para consultar os produtos!</span>
            </div>

            <div v-else>
                <ul class="flex f-wrap">
                    <li v-for="(product, index) in storeSearch.products" :key="index">
                        <a :href="product.Product.url.https" target="_blank">
                            <div class="image flex align-center justify-center">
                                <img :src="product.Product.ProductImage[0].https" :alt="product.Product.name" />
                            </div>
                            <div class="info-product">
                                <span class="name-product">
                                    {{ product.Product.name }}
                                </span>
                                <div class="price-product">
                                    <template  v-if="product.Product.promotional_price != 0">
                                        <span class="price-product-before">
                                            <VueNumberFormat
                                                v-model:value="product.Product.price"
                                            >
                                            </VueNumberFormat>
                                        </span>
                                        <span class="price-product-actual">
                                            <VueNumberFormat
                                                v-model:value="product.Product.promotional_price"
                                            >
                                            </VueNumberFormat>
                                        </span>
                                    </template>
                                    <span class="price-product-actual" v-else>
                                        <template v-if="product.Product.price == 0.00">
                                            <b>Esgotado!</b>
                                        </template>
                                        <template v-else>
                                            <VueNumberFormat
                                                v-model:value="product.Product.price"
                                            >
                                            </VueNumberFormat>
                                        </template>
                                    </span>
                                </div>
                                <span class="payment-product" v-html="product.Product.payment_option">
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>

        </div>

    </div>
</template>

<style scoped>
    .loading svg{
        display: block;
        margin: 1rem auto;
        max-width: 100px;
    }

    .alert,
    .error{
        border-radius: .5rem;
        padding: 1rem;
        margin: 1rem auto;
        font-weight: 400;
        font-size: 1rem;
        max-width: 25rem;
        display: block;
        text-align: center;
    }

    .alert{
        background-color: #FDEBCC;
        color: #335688;
    }

    .error{
        background-color: #FFDEDE;
        color: #AB3535;
    }

    .info-product > *{
        display: block;
    }

    li {
        width: 24%;
        border: 1px solid #efefef;
        margin: .5%;
        overflow: hidden;
        padding: .5rem;
    }

    @media (max-width: 1024px){
        li {
            width: 49%;
        }
    }

    .image {
        min-height: 280px;
    }

    .image img{
        max-height: 270px;
        max-width: 100%;
        display: block;
        margin: 0 auto .5rem;
    }

    @media (max-width: 500px){
        .image {
            min-height: 180px;
        }

        .image img{
            max-height: 170px;
        }
    }

    .name-product {
        color: #0f0f0f;
        font-size: 1rem;
        font-weight: 600;
        flex-grow: 1;
        max-height: 42px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .price-product{
        padding: .5rem 0;
    }

    input{
        border: 0 none;
        -webkit-appearance: none;
    }

    .price-product-before input{
        text-decoration: line-through;
        font-size: .87rem;
        font-weight: 400;
        color: gray;
    }

    .price-product-actual input{
        display: block;
        font-size: 1rem;
        font-weight: 600;
        color: #002c6a;
    }

    .price-product-actual b{
        color: gray;
    }

    .payment-product{
        font-size: .87rem;
        font-weight: 400;
        color: gray;
    }
</style>
