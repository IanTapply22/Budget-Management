<template>
    <v-col class="ml-2" cols="12" md="12">
        <v-row>
            <!-- Fields to create costs -->
            <USDCostCreation />
            <CADCostCreation />
        </v-row>
        <!-- Header and cost information on shipping -->
        <CostsHeader />
        <CostInformation />
        <!-- Displays the costs for both USD and CAD -->
        <v-row class="mt-10 justify-center">
            <USDCards />
            <CADCards />
        </v-row>
    </v-col>

    <!-- Message displayed if no costs have been created -->
    <h1 v-if="budget.usdCosts == false && budget.cadCosts == false" class="text-center">
        No costs have been created! Please create one with the fields above.
    </h1>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore()
        }
    }
}
</script>