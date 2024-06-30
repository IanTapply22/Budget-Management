<template>
            <!-- Wage rates -->
            <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="budget.hourlyWage" label="CAD Hourly Wage" required width="100" :step="1" />
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