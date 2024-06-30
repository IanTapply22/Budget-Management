<template>
    <!-- Tax settings -->
    <v-col cols="12" md="4">
        <v-row>
            <v-number-input v-model="budget.usdTaxRate" label="USD Tax Rate" required width="100" class="mr-4"
                :step="1" />
            <v-number-input v-model="budget.cadTaxRate" label="CAD Tax Rate" required width="100" class="mr-4"
                :step="1" />
            <v-btn @click="budget.usdTaxRate = 15, budget.cadTaxRate = 13" color="red" class="mt-2">
                Reset Tax Rates
            </v-btn>
        </v-row>
    </v-col>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        };
    },
};
</script>