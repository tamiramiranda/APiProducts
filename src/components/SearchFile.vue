<script setup lang="ts">
    import { useQueryProducts } from '../composables/query';

    const findProducts = useQueryProducts();
</script>

<template>
    <div>

        <form>
            <div class="form-block">
                <span class="form-title">Digite a URL:</span>
                <div class="flex align-center">
                    <label class="form-label">
                        <input
                            name="text"
                            type="text"
                            class="form-control"
                            placeholder="Digite a URL"
                            v-model="findProducts.dados.url"
                        />
                    </label>
                    <button
                        class="btn btn-success transition"
                        type="submit"
                        @click.prevent="findProducts.checkUrl(findProducts.dados.url)"
                    >
                        Consultar
                    </button>
                </div>
                <div id="message"></div>
            </div>
        </form>

    </div>
</template>

<style scoped>
    form{
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #9DA0BB;
        border-radius: .5rem;
        padding: 1.50rem;
    }

    form label {
        width: 100%;
    }

    .form-title {
        font-size: 1.12rem;
        font-weight: 600;
        line-height: 1.75rem;
        color: #43a0d6;
        margin-bottom: .50rem;
        display: block;
    }

    .form-control {
        color: #4e4e4e;
        border-radius: .5rem;
        padding: .5rem .75rem;
        background-color: #fff;
        border: 1px solid #7C81A5;
        height: 2.37rem;
        font-size: .87rem;
        width: 100%;
    }

    .btn-success {
        height: 2.37rem;
        border-radius: .5rem;
        border: 0 none;
        padding: .5rem 3rem;
        background-color: #7b9b0e;
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        margin-left: .75rem;
    }

    .btn-success:hover{
        opacity: .8;
    }

    #message:not(:empty){
        color: #AB3535;
        margin-top: .50rem;
        font-weight: 400;
        font-size: .75rem;
    }
</style>