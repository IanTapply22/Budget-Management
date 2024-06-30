<template>
    <!-- Create cards for CAD costs -->
    <v-card v-for="cost in budget.cadCosts" :key="cost.id" width="400" class="ml-4">
        <v-card-title>
            <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
        </v-card-title>
        <v-card-text>
            <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
            <h3 class="font-weight-medium">Cost: {{ cost.amount }} CAD</h3>
            <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} CAD</h3>
            <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateCadItemTax(cost) }} CAD</h3>
            <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateCadItemTotal(cost) }} CAD
            </h3>
            <h3 class="font-weight-medium">USD Conversion: {{ budget.convertToUsd(budget.calculateUsdItemTotal(cost)) }}
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