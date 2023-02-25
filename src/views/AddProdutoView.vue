

<template>
    <main>
        <h2>Inclusão de Produtos</h2>
        <form @submit.prevent="submitProduct(this)">
            <table>
                <tr>
                    <td>ID</td>
                    <td><input type="text" name="id" v-model="product.id" readonly></td>
                </tr>
                <tr>
                    <td>SKU</td>
                    <td><input type="text" name="sku" v-model="product.sku" minlength="5" maxlength="10">
                        <p class="p-error" v-if="errors.input === 'sku'">{{ errors.message }}</p>
                    </td>
                </tr>
                <tr>
                    <td>Descrição</td>
                    <td><input type="text" name="descricao" v-model="product.descricao" minlength="5" maxlength="250">
                        <p class="p-error" v-if="errors.input === 'descricao'">{{ errors.message }}</p>
                    </td>
                </tr>
                <tr>
                    <td>Data Referência</td>
                    <td><input type="date" name="dataReferencia" v-model="product.dataReferencia">
                        <p class="p-error" v-if="errors.input === 'dataReferencia'">{{ errors.message }}</p>
                    </td>
                </tr>
                <tr>
                    <td>Valor Referência</td>
                    <td><input type="text" name="valorCusto" v-model="product.valorCusto" v-money="product.valorCusto"
                            id="valorCusto">
                        <p class="p-error" v-if="errors.input === 'valorCusto'">{{ errors.message }}</p>
                        <p>Valor deverá ser
                            superior a 1.00</p>
                    </td>
                </tr>
            </table>
            <div id="button-bar">
                <button>
                    <RouterLink to="/produto">Voltar</RouterLink>
                </button>
                <button>Gravar</button>
            </div>
        </form>
    </main>
</template>

<script>
import api from "@/services/api";
import Product from "@/domain/product/Product";

export default {
    name: 'AddProdutoView',
    data() {
        return {
            product: {
                id: '',
                sku: '',
                descricao: '',
                dataReferencia: '',
                valorCusto: '0,00'
            },
            errors: {
                input: '',
                message: ''
            }
        }
    },
    methods: {
        submitProduct: function () {
            console.log(this.product)
            if (confirm('Deseja realmente adicionar este produto?')) {
                this.product.valorCusto.replace(".", "");
                this.product.valorCusto = parseFloat(this.product.valorCusto.replace(",", "."));

                api.post('/produto', this.product).then(response => {
                    alert('Produto adicionado com sucesso.');
                    return this.$router.push({ name: 'Produtos' })
                }, err => {
                    console.error(err.response);
                    if (err.response.data[0].field !== "") {
                        this.errors.input = err.response.data[0].field;
                        this.errors.message = err.response.data[0].userMessage;
                    }
                    return alert('Não foi possível adicionar o produto.' + err.response.data[0].userMessage);
                })
            }
        }
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

form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

table,
td {
    border: 1px solid black;
    text-align: start;
    padding: 10px;
}

input:read-only {
    background-color: #c3c3c3;
}

p {
    font-size: 14px;
    margin: 5px 0;
}

.p-error {
    color: #ff0000;
}

#button-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
}
</style>
