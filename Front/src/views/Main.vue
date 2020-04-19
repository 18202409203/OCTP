<template>
  <div class="layout">
    <Layout>
      <!-- header -->
      <Menu mode="horizontal" theme="light">
        <div class="layout-logo">
          <span>{{ logoText }}</span>
        </div>
        <div class="layout-nav">
          <!-- fast menu -->
          <MenuItem
            v-for="hmItem in horizontalMenuItems"
            :key="hmItem.route"
            :name="hmItem.text"
          >
            <router-link :to="hmItem.route">
              <Icon :type="hmItem.icon"></Icon>
              {{ hmItem.text }}
            </router-link>
          </MenuItem>
          <!-- avatar menu -->
          <Dropdown style="margin-left: 20px" placement="bottom-end">
            <Avatar :src="userInfo.avatar" />
            <DropdownMenu slot="list">
              <router-link
                v-for="amItem in avatarMenuItems"
                :key="amItem.route"
                :to="`${amItem.route}/${userInfo.uid}`"
              >
                <DropdownItem>{{ amItem.text }}</DropdownItem>
              </router-link>
              <router-link to="/Login">
                <DropdownItem>
                  {{ "退出登录" }}
                </DropdownItem>
              </router-link>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Menu>
      <!-- content -->
      <Content :style="{ padding: '0 5vw' }">
        <Breadcrumb :style="{ margin: '20px 0' }">
          <BreadcrumbItem
            v-for="breadCrumb in $route.meta.breadCrumbs"
            :key="breadCrumb"
          >
            {{ breadCrumb }}
          </BreadcrumbItem>
        </Breadcrumb>
        <Card shadow>
          <router-view />
        </Card>
      </Content>
      <!-- footer -->
      <Footer class="layout-footer-center">2020 &copy; OCTP</Footer>
    </Layout>
  </div>
</template>
<script>
import config from "../config";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    return {
      logoText: config.logoText,
      horizontalMenuItems: config.horizontalMenuList,
      avatarMenuItems: config.avatarMenuList
    };
  }
};
</script>

<style scoped lang="scss">
$logo-text-padding: 10px;

.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  min-height: 100%;
}
.layout-logo {
  border-radius: $logo-text-padding;
  float: left;
  position: relative;
  padding: 0 $logo-text-padding;
  font-weight: bold;
}
.layout-nav {
  margin-right: 20px;
  float: right;
}
.layout-footer-center {
  text-align: center;
}
</style>
