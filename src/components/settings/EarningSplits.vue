<template>
    <v-row class="justify-center mb-2">
        <!-- Earning splitting -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="percentageToSpending" label="Percentage To Spendings" required
                    width="100" :step="1" />
                <v-number-input v-model="percentageToSaving" label="Percentage To Savings" required :step="1" />
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
            percentageToSpending: 50,
            percentageToSaving: 50,
        };
    },
    watch: {
        percentageToSpending: function (newVal) {
            this.percentageToSaving = 100 - newVal;
            this.budget.percentageToSpending = newVal;
        },
        percentageToSaving: function (newVal) {
            this.percentageToSpending = 100 - newVal;
            this.budget.percentageToSaving = newVal;
        }
    }
};
</script>