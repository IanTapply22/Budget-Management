<template>
    <!-- Earning splitting -->
    <v-col cols="12" md="4">
        <v-row>
            <v-number-input class="mr-4" v-model="budget.percentageToSpending" label="Percentage To Spendings" required
                width="100" :step="1" />
            <v-number-input v-model="budget.percentageToSaving" label="Percentage To Savings" required width="100"
                :step="1" />
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