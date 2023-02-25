

<template>
    <div class="main-content">
        <h2>Inclusão de Produtos</h2>
        <form @submit.prevent="submitProduct(this)">
            <table>
                <tr>
                    <td>ID</td>
                    <td><input type="text" class="input-id" name="id" v-model="product.id" readonly></td>
                </tr>
                <tr>
                    <td>SKU</td>
                    <td><input type="text" class="input-sku" name="sku" v-model="product.sku" minlength="5" maxlength="10">
                        <p class="p-error" v-if="errors.input === 'sku'">{{ errors.message }}</p>
                    </td>
                </tr>
                <tr>
                    <td>Descrição</td>
                    <td><input type="text" class="input-descricao" name="descricao" v-model="product.descricao" minlength="5" maxlength="250">
                        <p class="p-error" v-if="errors.input === 'descricao'">{{ errors.message }}</p>
                        <p>Campo não pode ser vazio</p>
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
                    <td>
                        <div class="input-group">
                            <div class="input-prefix">R$</div>
                            <input type="text" name="valorCusto" v-model="product.valorCusto" v-money="product.valorCusto"
                                id="valorCusto">
                        </div>
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
    </div>
</template>

<script>
import api from "@/services/api";

export default {
    name: 'AddProdutoView',
    data() {
        return {
            product: {
                id: this.$route.params.id,
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
            if (this.product.id > 0) {
                if (confirm('Deseja realmente editar este produto?')) {
                    this.product.valorCusto.replace(".", "");
                    this.product.valorCusto = parseFloat(this.product.valorCusto.replace(",", "."));

                    api.put('/produto', this.product).then(response => {
                        alert('Produto editado com sucesso.');
                        return this.$router.push({ name: 'Produtos' })
                    }, err => {
                        console.error(err.response);
                        if (err.response.data[0].field !== "") {
                            this.errors.input = err.response.data[0].field;
                            this.errors.message = err.response.data[0].userMessage;
                        }
                        return alert('Não foi possível editar o produto.' + err.response.data[0].userMessage);
                    })
                }
            } else {
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
                        return alert('Não foi possível adicionar o produto.\n\n' + err.response.data[0].userMessage);
                    })
                }
            }
        }
    },
    created() {
        if (this.product.id) {
            api.get('/produto/' + this.product.id).then(response => {
                this.product = response.data;
                this.product.valorCusto = this.product.valorCusto.toFixed(2);
            }, err => {
                alert('Produto não encontrado.');
            })
        }
    }
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

tr > td:first-child {
    width: 140px;
}

input {
    border: 1px solid black;
}

input:read-only {
    background-color: #c3c3c3;
}

.input-id {
    width: 40px;
}

.input-sku {
    width: 50%;
}

.input-descricao {
    width: 100%;
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

.input-group {
    display: flex;
    flex-direction: row;
}

.input-prefix {
    background-color: #c3c3c3;
    border-radius: 0;
    border: 1px solid black;
    border-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
}
</style>
