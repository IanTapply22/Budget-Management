<template>
    <h2 class="text-center mt-2">Untaxed Pay Every {{ budget.paySchedule }} Weeks: {{ calculatePayForPayPeriod() }} CAD</h2>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        };
    },
    methods: {
        calculatePayForPayPeriod(): number {
            return (this.budget.hourlyWage * this.budget.hoursPerWeek) * this.budget.paySchedule
        },
    }
};
</script>