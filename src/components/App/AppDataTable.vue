<template>
  <div class="row">
    <!-- Grid Item -->
    <div class="col-xl-12">
      <!-- Entry Header -->
      <div class="dt-entry__header">
        <!-- Entry Heading -->
        <div class="dt-entry__heading">
          <h3 class="dt-entry__title">Simple Table</h3>
        </div>
        <!-- /entry heading -->
      </div>
      <!-- /entry header -->

      <!-- Card -->
      <div class="dt-card overflow-hidden">
        <!-- Card Body -->
        <div class="dt-card__body p-0">
          <!-- Tables -->
          <div class="table-responsive">
            <table class="table table-striped mb-0">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th class="text-uppercase" scope="col">First Name</th>
                  <th class="text-uppercase" scope="col">Last Name</th>
                  <th class="text-uppercase" scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Chris</td>
                  <td>Crowder</td>
                  <td>
                    <a href="javascript:void(0)" class="btn-link">@c.crowder</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Domnic</td>
                  <td>Brown</td>
                  <td>
                    <a href="javascript:void(0)" class="btn-link">@dom.brown</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jonathan</td>
                  <td>Madano</td>
                  <td>
                    <a href="javascript:void(0)" class="btn-link"
                      >@john.madano</a
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Stella</td>
                  <td>Johnson</td>
                  <td>
                    <a href="javascript:void(0)" class="btn-link"
                      >@stella.johnson</a
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Michael</td>
                  <td>Jacklin</td>
                  <td>
                    <a href="javascript:void(0)" class="btn-link"
                      >@michael.jack</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /tables -->
        </div>

        <!-- /card body -->
      </div>
      <!-- Pagination -->
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href @click="console.log('yarita')"
              >Previous</a
            >
          </li>
          <li class="page-item ">
            <a class="page-link" href @click="console.log($event)">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href @click="console.log('yarita')">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href @click="console.log('yarita')">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href @click="console.log('yarita')">Next</a>
          </li>
        </ul>
      </nav>
      <!-- /pagination -->
      <!-- /card -->
    </div>
    <!-- /grid item -->
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
