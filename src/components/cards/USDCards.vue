<template>
    <!-- Create cards for USD costs -->
    <v-card v-for="cost in budget.usdCosts" :key="cost.id" width="400" rounded class="ml-4 mt-4">
        <v-card-title>
            <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
        </v-card-title>
        <v-card-text>
            <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
            <h3 class="font-weight-medium">Cost: {{ cost.amount }} USD</h3>
            <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} USD</h3>
            <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateUsdItemTax(cost) }} USD</h3>
            <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateUsdItemTotal(cost) }} USD</h3>
            <h3 class="font-weight-medium">CAD Conversion: {{ budget.convertToCad(budget.calculateUsdItemTotal(cost)) }}
                CAD
            </h3>
        </v-card-text>
    </v-card>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        }
    },
}
</script>