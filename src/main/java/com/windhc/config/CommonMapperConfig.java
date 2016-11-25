package com.windhc.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tk.mybatis.spring.mapper.MapperScannerConfigurer;

import java.util.Properties;

/**
 * Created by HC on 2016/9/9.
 */
@Configuration
public class CommonMapperConfig {

//  @Autowired
//  SqlSessionFactoryBean sqlSessionFactoryBean;

//  通用Mapper
  @Bean
  public MapperScannerConfigurer getMapperScannerConfigurer() {

    MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
//    mapperScannerConfigurer.setSqlSessionFactoryBeanName("sqlSessionFactory");
//    mapperScannerConfigurer.setSqlSessionFactoryBeanName("sqlSessionFactoryBean");
    mapperScannerConfigurer.setBasePackage("com.windhc.mapper");
    Properties properties = new Properties();
    properties.setProperty("mappers", "tk.mybatis.mapper.common.Mapper");
//    properties.setProperty("notEmpty", "false");
//    properties.setProperty("IDENTITY", "MYSQL");
    properties.setProperty("style", "normal");
    mapperScannerConfigurer.setProperties(properties);
    return mapperScannerConfigurer;
  }

}
