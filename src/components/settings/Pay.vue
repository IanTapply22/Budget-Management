<template>
    <v-row class="justify-center">
        <!-- Pay related -->
        <v-col cols="12" md="4">
            <v-row>
                <v-number-input class="mr-4" v-model="budget.hoursPerWeek" label="Hours Per Week" width="100"
                    :step="1" />
                <v-number-input v-model="budget.paySchedule" label="Weeks Between Pays" width="100" :step="1"
                    :min="1" />
                <v-number-input v-model="budget.payTaxPercentage" label="Pay tax %" width="100" :step="1" :min="0"
                    class="ml-4" />
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