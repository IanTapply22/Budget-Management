<template>
    <div class="ml-6">
        <h1 class="mt-10">Settings</h1>
        <TaxRates />
        <WageRates />
        <Pay />
        <EarningSplits />
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