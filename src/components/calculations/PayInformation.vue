<template>
    <v-row>
        <v-col>
            <h2 class="text-center font-weight-light">Hourly Wage (CAD): {{ budget.hourlyWage }}</h2>
        </v-col>
        <v-col>
            <h2 class="text-center font-weight-light">Hours Per Week: {{ budget.hoursPerWeek }}</h2>
        </v-col>
        <v-col>
            <h2 class="text-center font-weight-light">Pay Schedule: {{ budget.paySchedule }}</h2>
        </v-col>
        <v-col>
            <h2 class="text-center font-weight-light">Pay Tax Percentage: {{ budget.payTaxPercentage }}</h2>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <h2 class="text-center font-weight-light">Percentage To Spendings: {{ budget.percentageToSpending }}</h2>
        </v-col>
        <v-col>
            <h2 class="text-center font-weight-light">Percentage To Savings: {{ budget.percentageToSaving }}</h2>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        };
    }
};
</script>