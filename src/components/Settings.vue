<template>
    <div class="ml-6">
        <h1 class="mt-10">Settings</h1>
        <!-- Tax settings -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input v-model="budget.usdTaxRate" label="USD Tax Rate" required width="100" class="mr-4"
                    :step="0.01" />
                <v-number-input v-model="budget.cadTaxRate" label="CAD Tax Rate" required width="100" class="mr-4"
                    :step="0.01" />
                <v-btn @click="budget.setUsdTaxRate(0.15), budget.setCadTaxRate(0.13)" color="red" class="mt-2">
                    Reset Tax Rates
                </v-btn>
            </v-row>
        </v-col>
        <!-- Wage rates -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="budget.hourlyWage" label="CAD Hourly Wage" required width="100" :step="0.01" />
                <v-number-input v-model="budget.hourlyWage" label="CAD Hourly Wage" required width="100" :step="0.01" />
            </v-row>
        </v-col>
        <!-- Pay related -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="budget.hoursPerWeek" label="Hours Per Week" required width="100" :step="1" />
                <v-number-input v-model="budget.paySchedule" label="Weeks Between Pays" required width="100" :step="1" />
                <v-number-input v-model="budget.payTaxPercentage" label="Pay tax %" required width="100" :step="0.01" class="ml-4" />
            </v-row>
        </v-col>
        <!-- Earning splitting -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="budget.percentageToSpending" label="Percentage To Spendings" required width="100" :step="0.01" />
                <v-number-input v-model="budget.percentageToSaving" label="Percentage To Savings" required width="100" :step="0.01" />
            </v-row>
        </v-col>
    </div>
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