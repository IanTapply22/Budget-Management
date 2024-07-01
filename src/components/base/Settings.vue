<template>
    <div class="ml-6">
        <SettingsHeader />
        <RemoveAllCosts />
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