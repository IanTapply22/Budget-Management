<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Hourly Wage (CAD): <strong>{{ budget.hourlyWage }}</strong></h2>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Hours Per Week: <strong>{{ budget.hoursPerWeek }}</strong></h2>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Pay Schedule: <strong>{{ budget.paySchedule }}</strong></h2>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Pay Tax Percentage: <strong>{{ budget.payTaxPercentage }}</strong></h2>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12" md="6">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Percentage To Spendings: <strong>{{ budget.percentageToSpending }}</strong></h2>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-3" outlined>
          <h2 class="text-center font-weight-light">Percentage To Savings: <strong>{{ budget.percentageToSaving }}</strong></h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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