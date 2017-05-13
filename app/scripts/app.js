'use strict';

/**
 * @ngdoc overview
 * @name xookFrontApp
 * @description
 * # xookFrontApp
 *
 * Main module of the application.
 */
angular
  .module('xookFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'pascalprecht.translate',
    'toastr'
  ])
  .config(function ($routeProvider, $locationProvider, $translateProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .when('/levels', {
        templateUrl: 'views/levels.html',
        controller: 'LevelsCtrl',
        controllerAs: 'levels'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        controllerAs: 'courses'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.translations('en', {
      'user_name': 'User name',
      'password': 'Password',
      'error_pass': 'Your password is short. 8 chars minimum',

      login:'Login',

      language_en: 'language english',
      language_es: 'language spanish',

      general_data: 'General Data',
      public_data: 'Public Data',
      complet_name: 'Name',
      enter_date: 'Enter Date',
      profile: 'Profile',
      telphone: 'Telphone',
      toolTTelphone: 'Enter your home telphone number',
      address: 'Address',
      mail: 'E-mail',
      aboutYou: 'About you',
      toolTAboutYou: 'Tell us something about yourself, you school level, your academic achievement, etc.',
      contact: 'Contact Number',
      toolTContact: 'Enter you celphone number',
      location: 'Location',
      places: 'Places',
      student_Education: 'Student Education',
      toolTStudentEducaction: 'Choose tutoring level',
      school_subject: 'School Subject',
      education: 'Education',
      toolTEducation: 'Enter you title | Carrer | Professional',



      error_required: 'This is required.',
      error_length: 'The description is long',
      error_mail: 'Your email must be between 10 and 100 characters long and look like an e-mail address.',

      tutor_title_search: 'Select your tutoring',
      tutoring: 'Tutoring',
      tutors: 'Tutors',

      location_title_search: 'Select yout location',
      location: 'Location',
      country: 'Country',
      province: 'Province',

      level_title_search: 'Select yout tutoring level',
      level: 'Tutoring level',
      schedule_title_search: 'Select the desired day and time',
      schedule: 'Schedule',
      day: 'Day',
      hour: 'Hour',
      search: 'Search',
      continue: 'Continue',


      categories: 'Categories',
      categorie_name: 'Categorie Name',
      error_maxlength: 'The text is long',
      add: 'Add',
      edit: 'Edit',
      remove: 'Remove',


      levels: 'Levels',
      level_name: 'Level name',

      courses: 'Courses',
      courses_name: 'Course Name'


    });

    $translateProvider.translations('es', {
      'user_name': 'Nombre usuario',
      'password': 'Contraseña',
      'error_pass': 'Tu contraseña es pequeña debe de tener 8 caracteres minimo.',

      login:'Iniciar',

      language_en: 'Idioma Ingles',
      language_es: 'Idioma Español',

      general_data: 'Datos Generales',
      public_data: 'Datos Publicos',
      complet_name: 'Nombre',
      enter_date: 'Fecha Nac',
      profile: 'Perfil',
      telphone: 'Telefono',
      toolTTelphone: 'Ingrese su numero domiciliar',
      address: 'Direccion',
      mail: 'Correo',
      aboutYou: 'Acerca de Usted',
      toolTAboutYou: 'Cuentanos sobre ti, tu nivel esck,ar, tus logros academicos, etc.',
      contact: 'Numero de Contacto',
      location: 'Ubicacion',
      places: 'Lugares',
      student_Education: 'Escolaridad de Alumno',
      toolTStudentEducaction: 'Elije el nivel de tutorias',
      school_subject: 'Cursos',
      education: 'Educacion',
      toolTEducation: 'Ingrese su titulo | Carrera | Profesion',


      error_required: 'Esto es obligatorio',
      error_length: 'Descripcion demasiado larga',
      error_mail: 'Su correo electrónico debe tener entre 10 y 100 caracteres y parecer una dirección de correo electrónico.',


      tutor_title_search: 'Selecciona tu tutoria',
      tutoring: 'Tutoria',
      tutors: 'Tutores',

      location_title_search: 'Selecciona tu ubicacion',
      location: 'Ubicacion',
      country: 'Pais',
      province: 'Provincia',

      level_title_search: 'Selecciona tu nivel de tutoria',
      level: 'Nivel de tutoria',
      schedule_title_search: 'Selecciona el dia y horario deseado',
      schedule: 'Horario',
      day: 'Dia',
      hour: 'Hora',
      search: 'Buscar',
      continue: 'Continuar',


      categories: 'Categorias',
      categorie_name: 'Nombre de Categoria',
      error_maxlength: 'El texto es demasiado grande',
      add: 'Agregar',
      edit: 'Editar',
      remove: 'Eliminar',

      levels: 'Niveles',
      level_name: 'Nombre de Nivel Escolar',

      courses: 'Cursos',
      courses_name: 'Nombre de Curso'
    });

    $translateProvider.preferredLanguage('en');
  });
