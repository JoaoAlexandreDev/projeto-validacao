

<template>
  <main>
    <h2>Manutencao de Produtos</h2>
    <div class="search-bar">
        <RouterLink to="/add-produto">Adicionar</RouterLink>
        <span>Pesquisar <input type="text"></span>
    </div>
    <table>
        <thead>
            <th>ID</th>
            <th>SKU</th>
            <th>Descricao</th>
            <th>Valor Custo</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.id }}</td>
                <td>{{ product.sku }}</td>
                <td>{{ product.descricao }}</td>
                <td>{{ product.valorCusto }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
  </main>
</template>

<script>
import api from "@/services/api";
import { onMounted } from "vue";

export default {
    name: 'ProdutoView',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        api.get('/produto').then(response => {
            this.products = response.data;
        })
    },
}
</script>

<style scoped>
main {
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
table, td, th {
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
</style>
