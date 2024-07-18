import { reactive } from 'vue';
import { useSearchProducts } from '../stores/searchProducts';

export function useQueryProducts() {

    const dados = reactive({
        url: '',
    });

    const storeSearch = useSearchProducts();

    const checkUrl = (url) => {
        if (url) {
            try {
                const urlValida = new URL(url)
                storeSearch.setUrl(urlValida)
            } catch(err) {
                const text = document.getElementById('message') as HTMLTextAreaElement;
                text.innerText = 'Digite uma URL valida!';
                setTimeout(() => {
                    text.innerText = '';
                }, 1500)
            }
        } else {
            const text = document.getElementById('message') as HTMLTextAreaElement;
            text.innerText = 'Digite a URL!';
            setTimeout(() => {
                text.innerText = '';
            }, 1500)
        }
    }

    return {
        dados,
        checkUrl
    };

}