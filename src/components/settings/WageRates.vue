<template>
    <v-row class="justify-center">
        <!-- Wage rates -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input v-model="budget.hourlyWage" label="CAD Hourly Wage" :step="1" :min="0" />
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
        };
    },
};
</script>