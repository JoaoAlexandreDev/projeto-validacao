

<template>
    <main>
        <h2>Inclusao de Produtos</h2>
        <form>
            <table>
                <tr>
                    <td>ID</td>
                    <td><input type="text" name="id" readonly></td>
                </tr>
                <tr>
                    <td>SKU</td>
                    <td><input type="text" name="sku"></td>
                </tr>
                <tr>
                    <td>Descricao</td>
                    <td><input type="text" name="descricao"></td>
                </tr>
                <tr>
                    <td>Data Referencia</td>
                    <td><input type="date" name="data_referencia"></td>
                </tr>
                <tr>
                    <td>Valor Referencia</td>
                    <td><input type="text" name="valor_referencia"><br>Valor devera ser superior a 1.00</td>
                </tr>
            </table>
            <div id="button-bar">
                <button><RouterLink to="/produto">Voltar</RouterLink></button>
                <button>Gravar</button>
            </div>
        </form>
    </main>
</template>

<script>
import api from "@/services/api";

export default {
    name: 'AddProdutoView',
    data() {
        return {
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

table, td {
    border: 1px solid black;
    text-align: start;
    padding: 10px;
}

#button-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
}
</style>
