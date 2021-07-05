//
//  ViewController.m
//  Smartgarden
//
//  Created by Jörg Vanderhoeven on 05.07.21.
//

#import "ViewController.h"
#import <Cordova/CDVViewController.h>
#import <WebKit/WebKit.h>

@interface ViewController ()
@property (strong, nonatomic) IBOutlet UIView *myView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    CDVViewController* viewController = [CDVViewController new];
    viewController.view.frame = CGRectMake(0, 0, 320, 480);
    viewController.wwwFolderName = @"www";
    
    [_myView addSubview:viewController.view];
}


@end
