<template>
    <nav class="navbar navbar-expand navbar-dark bg-success">
        <a href="/" class="navbar-brand">V-Travel</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactcantho' }" class="nav-link">
                    Địa điểm du lịch 
                    <i class="fa-solid fa-map"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>