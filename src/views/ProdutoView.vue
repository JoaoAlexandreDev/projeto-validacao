

<template>
    <div class="main-content">
        <h2>Manutenção de Produtos</h2>
        <div class="search-bar">
            <RouterLink to="/adicionar-produto">Adicionar</RouterLink>
            <span>Pesquisar <input type="text" v-model="filter"></span>
        </div>
        <table :filters="filters">
            <thead>
                <th>ID</th>
                <th>SKU</th>
                <th>Descrição</th>
                <th>Valor Custo</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(product, index) in filteredProducts" :key="index">
                    <td>{{ product.id }}</td>
                    <td>
                        <RouterLink :to="{ name: 'Editar Produto', params: {id:product.id}}">{{ product.sku }}</RouterLink>
                    </td>
                    <td>{{ product.descricao }}</td>
                    <td>{{ product.valorCusto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</td>
                    <td><button @click="remove(product)">
                            <fa icon="trash" />
                        </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "@/services/api";
import { remove } from "@vue/shared";
import { onMounted } from "vue";

export default {
    name: 'ProdutoView',
    data() {
        return {
            products: [],
            filter: '',
        }
    },
    mounted() {
        api.get('/produto').then(response => {
            this.products = response.data;
        })
    },
    methods: {
        remove: function (product) {
            if (confirm('Deseja realmente excluir este produto?')) {
                api.delete('/produto/' + product.id).then(response => {
                    this.products.splice(this.products.indexOf(product), 1);
                    alert('Produto excluído com sucesso.');
                }, err => {
                    alert('Não foi possível excluir o produto.');
                })
            }
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                const id = product.id.toString().toLowerCase();
                const sku = product.sku.toLowerCase();
                const descricao = product.descricao.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return id.includes(searchTerm) || sku.includes(searchTerm) || descricao.includes(searchTerm);
            });
        }
    },
}
</script>

<style scoped>
.main-content {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.search-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

table,
td,
th {
    border: 1px solid black;
    text-align: start;
    padding: 10px;
}

th {
    background-color: #c3c3c3;
}

th:nth-child(1) {
    width: 100px;
}

td:last-child {
    text-align: center;
}
</style>
